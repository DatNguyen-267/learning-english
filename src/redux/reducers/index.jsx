import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import loadingReducer from "./loadingReducer";
import listenCourseReducer from "./listenCourseReducer";
import practiceListenReducer from "./practiceListenReducer";
import listenPartReducer from "./listenPartReducer";

import tokenReducer from "./tokenReducer";
import topicReducer from "./topicReducer";
import userReducer from "./userReducer";
import vocaReducer from "./vocaReducer";
import speakReducer from "./speakReducer";
import popUpReducer from "./popUpReducer";
import userProcessReducer from "./userProcessReducer";

import grammarReducer from "./grammarReducer";
import grammarTopicReducer from "./grammarTopicReducer";
import storeReducer from "./storeReducer";
import storeQuestionReducer from "./storeQuestionReducer";
import noteReducer from "./noteReducer";
import speakLessonReducer from "./speakLessonReducer";
import speakQuestionReducer from "./speakQuestionReducer";
import speakGrammarReducer from "./speakGrammarReducer";
import writeLessonReducer from "./writeLessonReducer";
import writeQuestionReducer from "./writeQuestionReducer";
import writeGrammarReducer from "./writeGrammarReducer";
const rootReducer = combineReducers({
    course: courseReducer,
    practiceListen: practiceListenReducer,
    loading: loadingReducer,
    token: tokenReducer,
    user: userReducer,
    voca: vocaReducer,
    topic: topicReducer,
    listenCourse: listenCourseReducer,
    listenPart: listenPartReducer,
    auth: authReducer,
    speak: speakReducer,
    popup: popUpReducer,
    userProcess: userProcessReducer,
    grammar: grammarReducer,
    grammarTopic: grammarTopicReducer,
    store: storeReducer,
    storeQuestion: storeQuestionReducer,
    note: noteReducer,
    speakLesson: speakLessonReducer,
    speakQuestion: speakQuestionReducer,
    speakGrammar: speakGrammarReducer,
    writeLesson: writeLessonReducer,
    writeQuestion: writeQuestionReducer,
    writeGrammar: writeGrammarReducer,
})

export default rootReducer