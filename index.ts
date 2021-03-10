export declare namespace api {
    namespace automaticMinds {
        type diaryValue = {
            conclusion: string;
            dt: string | null;
            errorsSelected: api.icons.logicErrors[] | [];
            event: string;
            id: number;
            logicError: string;
            moodRange: number;
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

    type alldata = api.automaticMinds.diaryValue & api.psychologyTests.hduValue & api.psychologyTests.bdiValue & api.automaticMinds.compareValue

    type authData = {
        login: string;
        password: string;
    }

    namespace register {
        type request = authData

        type response = {
            status: 'OK' | 'wrongPassword' | 'notFound';
            data: authData | null;
            text?: 'Неправильный пароль' | 'Пользователь не найден',
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

    namespace posts {
        type BlogItemType = {
            shortcode: string;
            caption: string;
            owner: {
                username: string;
                profilePicture: string;
            };
            childrenPictures: {
                url: string;
                videoUrl: string | null;
            }[];
        };

        type FilterTypes = 'all' | 'neurosis' | 'dependency' | 'anxiety' | 'loss' | 'advice' | 'psy' | 'fault';

        type BlogFilter = {
            name: string;
            type: FilterTypes;
        };

        type request = {
            start: number;
            offset: number;
            filter: FilterTypes;
        }

        type response = {
            posts: BlogItemType[];
            filters: BlogFilter[];
        }
    }

    namespace consultation {

        type staffProfileType = {
            photo: string,
            name: string,
            special: string,
            text: string
        }

        type staffType = {
            email: string;
            tel?: number | null;
            consultations: number;
            dailyLimit: number;
            consultationsToday: number;
            unanswered: number;
            isWoman: boolean;
            money: number;
            profile: staffProfileType
        }

        type social = 'WhatsApp' | 'Telegram' | 'Viber' | 'SMS сообщение';

        type specialistVal = {
            img: string;
            name: string;
            special: string;
            text: any;
        }

        namespace visit {
            type request = {
                staffEmail: string;
                userEmail: string;
            }
        }

        namespace getAnswer {
            type response = {
                answer: api.consultation.userType['answer'],
                photo: staffProfileType["photo"],
                name: staffProfileType["name"],
                special: staffProfileType["special"],
                text: staffProfileType["text"],
            }
        }

        namespace sendPhone {
            type request = {
                staffEmail: string;
                userEmail: string;
                tel: number;
                social: social
            }
        }

        type decisionRequest = {
            staffEmail: string;
            userEmail: string;
            decision: statusTypes;
        }

        type checkAnswerResponse = {
            hasAnswer: boolean;
        }

        type statusTypes = 'empty' | 'answered' | 'refuse' | 'accept' | 'visited' | 'acceptWithPhone';

        type answerRequest = {
            staffEmail: string;
            userEmail: string;
            text: string;
        }

        type answerTypes = {
            text: string;
        }

        type userType = {
            name: string;
            email: string;
            tel?: number | null;
            social?: social | null;
            token?: string;
            age: number;
            status: statusTypes;
            question: {
                difficulties: string;
                help: string;
                reason: string;
                condition: string;
                example: string;
            };
            answer?: answerTypes;
        };

        type request = {
            name: string,
            email: string,
            age: number,
            difficulties: string,
            help: string,
            reason: string,
            condition: string,
            example: string,
        }

        type response = {
            staffEmail?: string;
            status?: "OK";
        }
    }
}