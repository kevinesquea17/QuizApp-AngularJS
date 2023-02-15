export interface Quiz {
    name:      string;
    questions: Question[];
    _id:       string;
    __v:       number;
}

export interface Question {
    question: string;
    answers:  Answer[];
    _id:      string;
}

export interface Answer {
    answerItem:    string;
    answerText:    string;
    answerCorrect: boolean;
    _id:           string;
}

export interface Admin {
    _id:   string;
    name:  string;
    email: string;
    token: string;
}

export type AnswerPost = Omit<Answer, '_id'>;
export interface QuizPost {
    name: string,
    questions: QuestionPost[]
}

export interface QuestionPost {
    question: string,
    answers: AnswerPost[]
}
