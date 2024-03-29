export declare namespace common {
    type languages = 'ru' | 'en'
    type dbName = keyof reactNative.storesDataRecord
}

export declare namespace reactNative {

    type Page = 'WebView' | 'Diary' | 'DiaryFirstStep' | 'DiarySecondStep' | 'DiaryThirdStep' | 'DiaryFourthStep' | 'DiaryFifthStep' | 'DiarySixthStep';

    type getDataType = 'diaryAll' | 'bdiAll' | 'hduAll' | 'worryAll' | 'burnOutAll' | 'gratitudeAll' | 'compareAll';

    export type storesDataTestRecord = {
        bdi: api.psychologyTests.defaultValue;
        worry: api.psychologyTests.defaultValue;
        hdu: api.psychologyTests.hduValue;
        burnOut: api.psychologyTests.burnOutValue;
    };

    export type storesDataExercisesRecord = {
        diary: api.automaticMinds.diaryValue;
        gratitude: api.grattitude.gratitudeItemType;
        compare: api.automaticMinds.compareValue;
    };

    export type storesDataRecord = storesDataTestRecord & storesDataExercisesRecord;

    namespace messageToWebView {
        type messageToWebViewCommon = diaryAddNewRecordType;

        type diaryAddNewRecordType = {
            eventName: 'diaryNewRecord';
            recordsCount: number;
        }
    }

    namespace onMessage {

        type onMessageCommon =
            reviewPopupType
            | loadedType
            | paymentType
            | cancelTimerType
            | setTimerType
            | testsMigrationsType
            | dbEventAddOrUpdateType
            | dbEventDeleteType
            | getRNdataType
            | updatePopupType
            | webViewConsoleType
            | changeLangType
            | routeType

        type reviewPopupType = {
            eventName: 'reviewPopup';
        }

        type updatePopupType = {
            eventName: 'updatePopup';
        }

        type loadedType = {
            eventName: 'loaded';
        }

        type paymentType = {
            eventName: 'payment';
            productId: string;
        }

        type changeLangType = {
            eventName: 'changeLang';
            lang: common.languages;
        }

        type cancelTimerType = {
            eventName: 'cancelTimer';
            id: number;
        }

        type webViewConsoleType = {
            eventName: 'webViewConsole';
            event: string;
        }

        type setTimerType = {
            eventName: 'setTimer';
            title: string;
            message: string;
            dateMilliseconds: number;
            id: number;
        }

        type testsMigrationsType = {
            eventName: 'testsMigrations';
            data: {
                bdi?: api.psychologyTests.defaultValue[],
                hdu?: api.psychologyTests.hduValue[],
                worry?: api.psychologyTests.defaultValue[],
                burnOut?: api.psychologyTests.burnOutValue[]
            }
        }

        type dbEventAddOrUpdateType = {
            eventName: 'dbEventAddOrUpdate';
            dbName: common.dbName;
            data: api.psychologyTests.testsTypes | api.automaticMinds.diaryValue | api.grattitude.gratitudeItemType | api.automaticMinds.compareValue;
        }

        type dbEventDeleteType = {
            eventName: 'dbEventDelete';
            dbName: common.dbName;
            id: string;
        }

        type getRNdataType = {
            eventName: 'getRNdata';
            type: getDataType
        }

        type routeType = {
            eventName: 'route';
            page: Page
        }
    }

    namespace injectedWindowData {
        type products = '1' | '2' | '3' | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14";

        type productsContract = {
            amount: string;
            product_id: products;
        }

        type productsStatus = boolean;

        type langs = common.languages;

        type communicationData = {
            'productsStatus': boolean;
            'safeArea': number;
            'diaryAll': api.automaticMinds.diaryValue[];
            'bdiAll': api.psychologyTests.defaultValue[];
            'gratitudeAll': api.grattitude.gratitudeItemType[];
            'compareAll': api.automaticMinds.compareValue[];
            'worryAll': api.psychologyTests.defaultValue[];
            'hduAll': api.psychologyTests.hduValue[];
            'burnOutAll': api.psychologyTests.burnOutValue[],
        }
    }

}

export declare namespace api {
    namespace grattitude {
        type directType = 'self' | 'other' | 'universe';

        type recordsType = {
            dt: number;
            text: string;
            direct: directType;
        };

        type ScoreTypes = {
            start: number;
            finish: null | number;
        };

        type gratitudeItemType = {
            id: number;
            dt: number;
            date: string;
            year: number;
            score: ScoreTypes;
            records: recordsType[];
        };
    }

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
        type testsTypes = defaultValue | hduValue | burnOutValue;

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

        type burnOutValue = {
            date: string | null;
            id: number;
            steps: number[];
            burnOutTotal: number;
            piScore: number;
            pmScore: number;
            loScore: number;
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
            | 'rage'
            | 'offense'
            | 'disgust'
            | 'fury'
            | 'annoyance'
            | 'boredom'
            | 'grief'
            | 'sadness'
            | 'sad'
            | 'horror'
            | 'anxiety'
            | 'fault'
            | 'panic'
            | 'confusion'
            | 'nervousness'
            | 'disappointment'
            | 'embarrassment'
            | 'excitement'
            | 'apathy'
            | 'despair'
            | 'shame'
            | 'insult'
            | 'guilt'
            | 'misunderstanding'
            | 'loneliness';
    }

    type alldata = api.automaticMinds.diaryValue
        & api.psychologyTests.hduValue
        & api.psychologyTests.defaultValue
        & api.automaticMinds.compareValue

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

    namespace consultationPartners {
        namespace visit {
            type request = {
                name: string;
                age: number;
                source?: 'web'
            }
        }

        namespace getHistory {
            type response = {
                common: number;
                repeatVisits: number;
                history: {
                    name: string;
                    age: number;
                    time: string;
                }[]
            }
        }
    }

    namespace shareDiary {
        namespace shareDiaryGetAll {
            type request = { user: string };
            type response = {
                shared: number[]
            }
        }

        namespace shareDiaryGetItem {
            type request = { user: string, id: number };
            type response = api.automaticMinds.diaryValue;
        }

        namespace shareDiaryAdd {
            type request = { user: string, item: api.automaticMinds.diaryValue };
            type response = {
                status: 'OK'
            }
        }

        namespace shareDiaryDelete {
            type request = { user: string, id: number };
            type response = {
                status: 'OK'
            }
        }
    }

    namespace feed {
        type feedItem = {
            id: string;
            title: string;
            short: string;
            text: string;
            author: string;
            authorLink: string;
            likes: number;
        }

        namespace feedList {

            type feedItemList = {
                id: string;
                title: string;
                short: string;
                author: string;
                likes: number;
            }

            type request = { language: common.languages; offset: number }

            type response = {
                feed: feedItemList[]
            }
        }

        namespace feedItem {

            type item = {
                id: string;
                title: string;
                short: string;
                text: string;
                author: string;
                authorLink: string;
                likes: number;
            }

            type request = { id: string }

            type response = item
        }

        namespace feedAdd {

            type item = {
                title: string;
                short: string;
                text: string;
                author: string;
                authorLink: string;
            }

            type request = item;

            type response = {
                status: 'OK'
            }
        }

        namespace feedLike {
            type request = {
                likes: number;
            }

            type response = {
                id: string;
                type: 'incr' | 'decr'
            }
        }

        namespace feedSearch {
            type request = {
                text: string;
                language: common.languages
            }

            type response = api.feed.feedList.feedItemList[]
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
                help: string;
                reason: string;
            };
            answer: answerTypes;
        };

        type request = {
            name: string,
            age: number,
            help: string,
            reason: string,
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

    namespace feedback {
        type feedbackError = {
            text: string;
            type: 'error'
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