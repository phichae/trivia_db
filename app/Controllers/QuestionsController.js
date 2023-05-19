import { questionsService } from "../Services/QuestionsService.js"


export class QuestionsController {

    constructor(){
        console.log('helo?')
    }

    async getQuestions(){
        await questionsService.getQuestions()
    }
}