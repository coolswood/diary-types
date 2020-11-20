export declare namespace api {
    namespace automaticMinds {
        type diaryValue = {
            conclusion: string;
            dt: string | null;
            errorsSelected: api.icons.logicErrors[] | [];
            event: string;
            id: number;
            logicError: string;
            moodRange: string;
            moodSelected: api.icons.mood[] | [];
            solution: string;
        };

        type compareItem = {
            id: number;
            text: string;
            level: number;
        };

        type score = {
            yes: number;
            no: number;
            commonScore: number;
            percent: number;
        };

        type compareValue = {
            name: string;
            isNegative: boolean;
            isUnresolved: boolean;
            id: number;
            date: string;
            score: score;
            yes: compareItem[];
            no: compareItem[];
        };
    }

    namespace psychologyTests {
        type bdiValue = {
            date: string | null;
            id: number;
            result: number[];
            score: number;
        };

        type hduValue = {
            date: string | null;
            id: number;
            result: number[];
            steps: number[];
        };
    }

    namespace icons {
        export type logicErrors =
            | 'max'
            | 'common'
            | 'filter'
            | 'discval'
            | 'jump'
            | 'moreMine'
            | 'emo'
            | 'maybe'
            | 'label'
            | 'response';

        export type mood =
            | 'anger'
            | 'alarm'
            | 'sorrow'
            | 'fear'
            | 'irritation'
            | 'despair'
            | 'shame'
            | 'insult'
            | 'guilt'
            | 'loneliness';
    }

    type alldata = api.automaticMinds.diaryValue & api.psychologyTests.hduValue & api.psychologyTests.bdiValue

    type authData = {
        login: string;
        password: string;
    }

    namespace register {
        type request = authData

        type response = {
            status: 'OK' | 'wrongPassword';
            data: authData | null;
            text?: 'Неправильный пароль',
        }
    }

    namespace getPassword {
        type request = Pick<authData, 'login'>

        type response = {
            status: 'OK' | 'wrongLogin';
            text: 'Пароль отправлен на указанный Email' | 'Не найден Email'
        }
    }

    namespace backup {
        type request = {
            login: string;
            lastUpdate: string;
            data: alldata;
        }

        type response = {
            status: 'OK'
        }
    }

    namespace lastUpdate {
        type request = Pick<authData, 'login'>

        type response = {
            status: 'OK' | 'noData';
            lastUpdate?: string
        }
    }

    namespace restore {
        type request = Pick<authData, 'login'>

        type response = {
            status: 'OK';
            data: alldata
        }
    }
}