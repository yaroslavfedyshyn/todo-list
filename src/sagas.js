import therapist from './stories/todos/saga';

function * mySaga() {
    return yield [
        ...therapist,
    ];
}

export default mySaga;
