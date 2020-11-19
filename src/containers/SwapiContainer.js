import React from 'react'
import { connect } from 'react-redux'
import { getPostByIdFunc, getPostsBulkFunc, getPlanetFunc, getMorePlanetFunc} from '../actions/swapi';
import { swapi } from '../reducers'
import Swapi from '../components/Swapi'


const SwapiContainer = ({ swapi, getPostById, getPostBulk, getPlanets, getMorePlanets }) => (
    <Swapi
        swapi={swapi}
        getPostById={getPostById}
        getPostBulk={getPostBulk}
        getPlanets={getPlanets}
        getMorePlanets={getMorePlanets}
    />
)

const mapStateToProps = (state) => ({
    swapi: state.swapi
})

const mapDispatchToProps = dispatch => {
    return {
        getPostById: getPostByIdFunc(dispatch),
        getPostBulk: getPostsBulkFunc(dispatch),
        getPlanets: getPlanetFunc(dispatch),
        getMorePlanets: getMorePlanetFunc(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SwapiContainer)