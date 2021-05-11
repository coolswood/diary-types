export declare namespace common {
    type languages = 'ru' | 'en'
}

export declare namespace reactNative {

    namespace onMessage {
        type reviewPopupType = {
            eventName: 'reviewPopup';
        }

        type loadedType = {
            eventName: 'loaded';
        }

        type paymentType = {
            eventName: 'payment';
            productId: string;
        }

        type cancelTimerType = {
            eventName: 'cancelTimer';
            id: number;
        }

        type setTimerType = {
            eventName: 'setTimer';
            title: string;
            message: string;
            dateMilliseconds: number;
            id: number;
        }
    }

    namespace injectedWindowData {
        type products = '1' | '2' | '3' | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14";

        type productsContract = {
            amount: string;
            product_id: products;
        }

        type productsStatus = boolean;

        type langs = 'ru' | 'en';
    }

}

export declare namespace api {
    namespace automaticMinds {
        type diaryValue = {
            conclusion: string;
            dt: string | null;
            errorsSelected: api.icons.logicErrors[] | [];
            event: string;
            id: number;
            logicError: string;
            feelInBody: string;
            behaviour: string;
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
        type defaultValue = {
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
            | 'misunderstanding'
            | 'loneliness';
    }

    type alldata = api.automaticMinds.diaryValue & api.psychologyTests.hduValue & api.psychologyTests.defaultValue & api.automaticMinds.compareValue

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

        type staffTariffType = "free" | "receiving"

        type ownerType = {
            id: string;
            wallet?: string;
        }

        type staffType = {
            email: string;
            password: string;
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
            owner?: ownerType;
            psychologists_id: string;
        }

        type staffListType = api.consultation.staffType;

        type social = 'WhatsApp' | 'Telegram' | 'Viber' | 'SMS сообщение';

        type specialistVal = {
            img: string;
            name: string;
            special: string;
            text: any;
        }

        namespace consultationAvailable {
            type response = {
                available: boolean
            }
        }

        namespace takeMoreTickets {
            type request = {
                count: number
            }

            type response = {
                dialogs: api.consultation.userType[],
                staff: api.consultation.staffType
            }
        }

        namespace getStaff {
            type request = {
                staffEmail?: string;
            }

            type response = {
                staff: api.consultation.staffType
            }

            type error = {
                redirectUrl: string;
            }
        }

        namespace removeStaff {
            type request = {
                staffId: string
            }
        }

        namespace consultationPsy {
            type request = {
                psyId?: string
            }

            type response = {
                dialogs: api.consultation.userType[],
            }

            type error = {
                redirectUrl: string;
            }
        }

        namespace visit {
            type request = {
                userId: string;
            }
        }

        type tariffProfitType = {
            total: number;
            receiving: number;
        }

        type calendarMoneyStaff = Record<string, tariffProfitType>

        type staffMoney = {
            total: number;
            calendar: calendarMoneyStaff;
            password: string;
            wallet: string;
        }

        namespace addMoney {
            type request = {
                staffId: string,
                addedMoney: number
            }
        }

        namespace getAllStaff {
            type response = {
                staff: staffListType[];
                commonCount: number;
                moneyThisMonth: staffMoney
            }

            type error = {
                redirectUrl: string
            }
        }

        namespace addStaff {
            type request = {
                newStaff: {
                    email: string;
                    isWoman: boolean;
                };
            }

            type response = {
                staff: staffListType;
            }
        }

        namespace answer {
            type request = {
                staffId: string,
                userId: string,
                text: string,
                price?: string,
                time: string
            }
        }

        namespace getAnswer {
            type request = {
                userId: string,
            }

            type response = {
                answer: api.consultation.userType['answer'],
                photo: staffProfileType["photo"],
                name: staffProfileType["name"],
                special: staffProfileType["special"],
                text: staffProfileType["text"],
            }
        }

        namespace updateStaff {
            type request = {
                staffId: string;
                dailyLimit: number,
                tariff: staffTariffType
            }
        }

        namespace sendPhone {
            type request = {
                userId: string;
                tel: string;
                social: social
            }
        }

        namespace updateStaffProfile {
            type request = staffProfileType & {emailStaff: string}
        }

        type decisionRequest = {
            userId: string;
            decision: statusTypes;
        }

        namespace checkAnswer {
            type request = {
                userId: string;
            }

            type response = {
                hasAnswer: boolean;
            }
        }

        namespace auth {
            type request = {
                email: string;
                password: string;
            }

            type response = {
                redirectUrl: string;
            }
        }

        type statusTypes = 'empty' | 'answered' | 'refuse' | 'accept' | 'visited' | 'acceptWithPhone';

        type answerTypes = {
            text: string | null;
            price?: string;
            time?: string;
        }

        type userType = {
            requestId: string;
            name: string;
            email: string;
            tel?: string;
            social?: social;
            token?: string;
            age: number;
            status: statusTypes;
            startDate?: string;
            question: {
                difficulties: string;
                help: string;
                reason: string;
                condition: string;
                example: string;
            };
            answer: answerTypes;
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
            userId?: string;
            status?: 'OK'
        }
    }

    namespace tests {

        type testsNamesTypes = 'bdi' | 'hdu' | 'worry'

        namespace timer {
            type request = {
                type: testsNamesTypes;
                lang: common.languages
            }
        }
    }

    namespace donation {
        type donat = {
            name: string,
            money: string,
            message: string,
            language: common.languages
        }

        namespace donationGet {
            type response = {
                donation: donat[]
            }
        }

        namespace donationAdd {

            type request = donat;

            type response = {
                status: 'OK'
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