import { appState } from "../AppState.js"
import { triviaApi } from "./AxiosService.js"


class QuestionsService {
    
    async getQuestions(){
        const res = await triviaApi.get('/api.php?amount=10&category=15&difficulty=medium&type=multiple')
        // console.log(res.data)
        // @ts-ignore
        appState.questions = res.data.map(q => new Question(q))
    }

}


export const questionsService = new QuestionsService()