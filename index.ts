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
}