import todos from './stories/todos/saga';

function * mySaga() {
    return yield [
        ...todos,
    ];
}

export default mySaga;
