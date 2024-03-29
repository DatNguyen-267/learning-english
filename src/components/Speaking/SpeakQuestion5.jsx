import React, { Component, useEffect, useState } from 'react';
import ListenMinQuestion from '../ListenMinQuestion/ListenMinQuestion';
import VocaTranscript from './VocaTranscript';
import "./SpeakQuestion5.scss"
import Record from './Record';
function SpeakQuestion5({ question, question_playing, setIsRecord, isRecord }) {
    const [toogle, setToogle] = useState(false);
    const [toogleAudio, setToogleAudio] = useState(false);
    const [text, settext] = useState(false);

    useEffect(() => {
        console.log("dữ lieuj load: ", text)
        if (question && question.list_word && question.type=="Question5") {
            loadtext()
        }
    }, [question])
    const loadtext = () => {
        const str = question.list_word
        const str2 = question.list_phonetic
        const paragraph1 = str.split("<br>")
        const paragraph2 = str2.split("<br>")
        let paragraph = []
        let i = 0
        paragraph1.forEach(element => {
            let listphonetic = []
            if(paragraph2.length > 1){
                listphonetic = paragraph2[i].split(" ")
            }
            else{
                listphonetic = paragraph2[0].split(" ")
            }
            let strong = false
            let newlist = []
            let list = element.split(" ")
            let j = 0
            list.forEach((word, index) => {
                if (word.includes("<strong>")) {
                    strong = true
                }
                if (strong) {
                    const item = {
                        word: "<strong>" + word,
                        phonetic: listphonetic[j],
                    }
                    newlist.push(item)
                }
                else {
                    const item = {
                        word: word,
                        phonetic: listphonetic[j],
                    }
                    newlist.push(item)
                }


                if (word.includes("</strong>")) {
                    strong = false
                }
                j++
            })
            paragraph.push(newlist)
            i++

        });
        console.log("list word:", paragraph)
        settext(paragraph)
    }
    const handleToogleTrans = () => {
        setToogle(!toogle)
    }
    const handleToogleAudio = () => {
        setToogleAudio(!toogleAudio)
    }

    return (
        <div className="speak-question-5">
            {/* <div className='speak-question-5__situation'>
                <p>Situation:</p>
                <span>
                    {question? question.situation:""}
                </span>
            </div> */}
            <div className='speak-question-5__title'>
                {`Câu ${question_playing + 1}: Answer the following question:`}
            </div>
            <div className="speak-question-5__header">
                {question.question}
            </div>
            <div className='speak-question-5__record'>
                <Record
                    question_playing={question_playing}
                    setIsRecord={setIsRecord}
                    isRecord={isRecord}
                >
                </Record>
            </div>
            <div className="speak-question-5__content" id={`speak-question-${question_playing}`}>
                <div className='speak-question-5__content-header'>
                    <h2 className='speak-question-5__content-title'>Gợi ý:</h2>
                    <div className='speak-question-5__action'>
                        <button className='speak-btn__trans btn-main' onClick={handleToogleTrans}><span>Phiên âm</span></button>
                        <button className='speak-btn__speak btn-main' onClick={handleToogleAudio}><span>Đọc câu</span></button>
                    </div>
                </div>
                <div className='speak-question-5__content-main'>
                    <div>
                        {
                            text ? text.map((item, index) => {    
                                return(
                                    <div className='speak-question-5__frames'>
                                    {
                                        item? item.map((word, index) =>{
                                            return(
                                                <VocaTranscript item={word} index={index} toogle={toogle} /> 
                                            )
                                        }):""
                                    }
                                    </div>
                                )
                             
                                
                            }) : ""
                        }
                    </div>
                    {
                        toogleAudio ?
                        <div className='speak-question-5__audio'>
                            <audio src={question? question.sound:""} controls></audio> 
                        </div>: ""

                    }
                </div>
            </div>
        </div>
    );
}

export default SpeakQuestion5;