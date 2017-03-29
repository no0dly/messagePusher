import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

import ExclusionItem from './ExclusionItem';
import * as actions from '../../actions';

export class ExclusionTable extends Component {
    onClickHandler(username, e) {
        e.preventDefault();
        const { dispatch } = this.props;

        dispatch(actions.exclusionRemove(username));
    }
    render() {
        const renderExclusion = () => {
            const { exclusions } = this.props;
            return exclusions.map( (exclusion, idx) => {
                return <ExclusionItem key={idx} username={exclusion} onClick={this.onClickHandler.bind(this, exclusion)}/>
            });
        }
        return (
            <div>
                <Table className="table is-bordered is-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {renderExclusion()}
                  </tbody>
              </Table>
            </div>
        )
    }
}

const Table = styled.table`
    tr {
        td,
        th {
            vertical-align: middle;
            text-align: center;
        }
    }
`;

export default connect(
    (state) => {
        return {
            exclusions: state.exclusions
        }
    }
)(ExclusionTable);
