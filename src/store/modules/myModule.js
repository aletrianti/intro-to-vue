// state: data to store globally
const state = {
    title: 'A test title',
    ratings: [1, 4, 5, 3]
};

// getters: used to return a modified version of a state property
const getters = {
    ratingsBelowFour: state => {
        return state.ratings.filter(rating =>
            rating < 4  
        );
    },
};

// actions: used to commit mutations
const actions = {
    setNewTitle({ commit }, newTitle) {
        commit('updateTitle', newTitle);
    }
};

// mutations: used to modify state properties
const mutations = {
    updateTitle(state, newTitle) {
        state.title = newTitle;
    }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};