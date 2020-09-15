import React, { useEffect } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import options from '../configs/GithubTableConfigs';
import { connect } from 'react-redux';
import * as reposDataActions from '../actions/reposDataActions';

const GithubTable = (props) => {
  /* loading and error states*/
  useEffect(() => {
    props.setRepositoriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.candidateFormReducer.candidateData]);

  return (
    <BootstrapTable
      data={props.reposDataReducer.reposData}
      striped
      hover
      condensed
      pagination={true}
      options={options}
    >
      <TableHeaderColumn dataField='lenguaje' isKey dataSort={true} width='100'>
        Lenguaje
      </TableHeaderColumn>
      <TableHeaderColumn dataField='branch' dataSort={true} width='100'>
        Branch
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField='url'
        dataSort={true}
        tdStyle={{ whiteSpace: 'normal' }}
      >
        Url Git
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField='name'
        dataSort={true}
        tdStyle={{ whiteSpace: 'normal' }}
      >
        Nombre
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField='description'
        dataSort={true}
        tdStyle={{ whiteSpace: 'normal' }}
      >
        Descripcion
      </TableHeaderColumn>
    </BootstrapTable>
  );
};

const mapStateToProps = ({ reposDataReducer, candidateFormReducer }) => {
  return {
    reposDataReducer,
    candidateFormReducer,
  };
};

export default connect(mapStateToProps, reposDataActions)(GithubTable);
