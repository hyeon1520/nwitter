import { dbService } from "fbase";

import { useEffect ,useState } from "react";

const Home = () => {
    //input에서 텍스트를 상태로 관리하기 위해 useState사용
    const [nweet, setNweet] = useState("");
    //받은 데이터로 게시물 목록을 만들기 위한 useState
    const [nweets, setNweets] = useState([]);

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        //setNweet으로 전달한 함수가 prev에 순회 -> prev를 전개 구문으로 다시 풀어서 새 데이터와 합친 다음, 다시 배열로 만들어 setNweets에 저장
        dbNweets.forEach((document) => {
            const nweetObject = { ...document.data(), id: document.id };
            //트윗 아이디 저장하기
            setNweet((prev) => [nweetObject, ...prev])
         });
    };

    useEffect(() => {
        getNweets();
    }, []);


    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createAt: Date.now(),
        });
        setNweet("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
           target: { value },
        } = event;
        setNweet(value);
    };

    //twit 기능 구현하기
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet} 
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120} //글자수 120자 제한
                />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        <h4>{nweet.text}</h4>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;