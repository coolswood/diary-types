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
            | 'prediction'
            | 'catastrophization'
            | 'read'
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

        type staffTariffType = {
            receiving: number
        }

        type ownerType = {
            id: string;
            wallet: string;
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
            spended: number;
            tariff: staffTariffType;
            profile: staffProfileType;
            owner?: ownerType
        }

        type staffListType = Record<string, api.consultation.staffType>;

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

        namespace getAllStaff {
            type request = {
                ownerEmail?: string;
            }

            type response = {
                staff: staffListType;
                commonCount: number;
            }
        }

        namespace addStaff {
            type request = {
                newStaff: api.consultation.staffType
            }

            type response = {
                staff: staffListType;
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

        namespace updateStaffProfile {
            type request = staffProfileType & { staffEmail: string }
        }

        type decisionRequest = {
            staffEmail: string;
            userEmail: string;
            decision: statusTypes;
        }

        type checkAnswerResponse = {
            hasAnswer: boolean;
            staffEmail?: string;
        }

        type statusTypes = 'empty' | 'answered' | 'refuse' | 'accept' | 'visited' | 'acceptWithPhone';

        type answerRequest = {
            staffEmail: string;
            userEmail: string;
            text: string;
            price?: string;
            time?: string;
        }

        type answerTypes = {
            text: string;
            price?: string;
            time?: string;
        }

        type userType = {
            name: string;
            email: string;
            tel?: number | null;
            social?: social | null;
            token?: string;
            age: number;
            status: statusTypes;
            startDate?: number;
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

    namespace tests {

        type testsNamesTypes = 'bdi' | 'hdu' | 'worry'

        namespace timer {
            type request = {
                type: testsNamesTypes;
            }
        }
    }

    namespace donation {
        type donat = {
            name: string,
            money: string,
            message: string
        }

        namespace donationGet {
            type response = {
                donations: donat[]
            }
        }

        namespace donationAdd {

            type request = donat;

            type response = {
                donations: donat[]
            }
        }
    }

    namespace bot {
        type option = Record<string, string>

        type dialog = {
            text: string[],
            options?: option,
            input?: string,
            action?: string;
        }

        namespace getId {
            type request = { id: string, steps: string[] };
        }

        namespace ask {
            type request = { text: string, parentId: string };
        }
    }
}