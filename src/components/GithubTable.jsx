import React, { useEffect } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import options from '../configs/GithubTableConfigs';
import { connect } from 'react-redux';
import * as reposDataActions from '../actions/reposDataActions';
import sortIcon from '../icons/sortImage.png';

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
      <TableHeaderColumn dataField='lenguaje' isKey dataSort={true} width='120'>
        Lenguaje
        <img src={sortIcon} alt='sortIcon' />
      </TableHeaderColumn>
      <TableHeaderColumn dataField='branch' dataSort={true} width='110'>
        Branch
        <img src={sortIcon} alt='sortIcon' />
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField='url'
        dataSort={true}
        tdStyle={{ whiteSpace: 'normal' }}
      >
        Url Git
        <img src={sortIcon} alt='sortIcon' />
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField='name'
        dataSort={true}
        tdStyle={{ whiteSpace: 'normal' }}
      >
        Nombre
        <img src={sortIcon} alt='sortIcon' />
      </TableHeaderColumn>
      <TableHeaderColumn
        dataField='description'
        dataSort={true}
        tdStyle={{ whiteSpace: 'normal' }}
      >
        Descripcion
        <img src={sortIcon} alt='sortIcon' />
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
