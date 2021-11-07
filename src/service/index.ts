import API from './api';
import {post} from './http';
import {PostCommandParams} from '../types';

export function postCommand(params: PostCommandParams) {
    return post(API.COMMAND, {
        ...params,
        time: new Date().valueOf()
    }, {
        'authorization': params.authorization,
        'x-tt-gameid': params.gameId,
    });
}
