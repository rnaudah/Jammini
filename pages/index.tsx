import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"
import {useEffect, useState} from "react";
import Random from "../utills/Random";

const Home: NextPage = () => {
    const [modal, setModal] = useState<boolean>(true)
    const [scoreboard, setScoreboard] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)
    const [random, setRandom] = useState({
        AnimateX : [0, +(Random(350,50)), -(Random(350,50)),  0],
        AnimateY : [0, +(Random(350,50)) + 50, -(Random(350,50)),  0],
        AnimateScale : [1, +(Random(3,1)) + 1, -(Random(3,1)),  1]
    })
    setInterval(function (){
        setRandom({
            AnimateX : [0, +(Random(350,50)), -(Random(350,50)),  0],
            AnimateY : [0, +(Random(350,50)) + 50, -(Random(350,50)),  0],
            AnimateScale : [1, +(Random(3,1)) + 1, -(Random(3,1)),  1]
        })
    }, 4000)

    return (
        <div className={"bg-black"}>
            {modal && (
                <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center space-x-4 p-10 z-50">
                    <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
                        <h1 className="text-white  font-bold text-6xl mb-4">잼민이를 잡아라!</h1>
                        <p className="text-white  font-bold text-3xl mb-4">활기차게 뛰노는 잼민이를 잡아보세요 ㅋㅋㄹㅃㅃ</p>
                        <button
                            onClick={() => setModal(false)}
                            className="px-5 py-2 rounded-xl text-white text-2xl font-semibold bg-red-600 "
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {scoreboard && (
                <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center space-x-4 p-10 z-50">
                    <div className="flex justify-center items-left py-10 px-20 flex-col backdrop-blur-3xl rounded-3xl text-white">
                        <h1 className="text-white  font-bold text-6xl mb-4">성공!</h1>
                        <p className="text-white  font-bold text-3xl mb-4">점수 : {score}</p>
                        <button
                            onClick={() => setScoreboard(false)}
                            className="px-5 py-2 rounded-xl text-white text-2xl font-semibold bg-red-600 "
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className={"flex min-h-screen justify-center items-center"}>
                <motion.div
                    animate={{ x: random.AnimateX, y : random.AnimateY, rotate : [0, 180, 0], scale : random.AnimateScale }}
                    transition={{duration : 1, repeat : Infinity}}
                >
                    <button onClick={() => {
                        setScoreboard(true)
                        setScore(score + 1)
                    }} className={"text-5xl z-0 text-white"}>👊🤓👊</button>
                </motion.div>
            </div>
        </div>
    )
}

export default Home
