import { LocalStorage } from 'quasar'
const getDefaultState = () => {
    return {
        uid: '',
        myInfo: {},
        contactInfo: {},
        eventInfo: {},
        noteInfo: {}
    };
};
const state = getDefaultState();
const mutations = {
    resetState(state) {
        Object.assign(state, getDefaultState());
    },
    setUid(state, value) {
        state.uid = value;
    },
    setMyInfo(state, value) {
        state.myInfo = value;
    },
    setContactInfo(state, value) {
        state.contactInfo = value
    },
    setEventInfo(state, val) {
        state.eventInfo = val;
    },
    setNoteInfo(state, val) {
        state.noteInfo = val;
    }
};

const actions = {
    setRefreshState({ commit }) {
        commit("setRefreshState");
    },

};

const getters = {
    uid: state => {
        return state.uid
    },
    myInfo: state => {
        return state.myInfo
    },
    contactInfo: state => {
        return state.contactInfo
    },
    eventInfo: state => {
        return state.eventInfo
    },
    noteInfo: state => {
        return state.noteInfo
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
