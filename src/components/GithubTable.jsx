import React, { useEffect, useState } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import options from '../configs/GithubTableConfigs';
import fetchData from '../API/fetchData';

const GithubTable = (props) => {
  const [reposRawData, setReposRawData] = useState(props.reposData);
  /* loading and error states*/

  useEffect(() => {
    /* USER está quemado, cambiarlo con los props */
    fetchData('https://api.github.com/users/Josehdez96/repos').then((res) =>
      setReposRawData(res)
    );
  }, []);

  let normalizedRepos = reposRawData.map((item) => ({
    lenguaje: item.language,
    branch: item.default_branch,
    url: item.url,
    name: item.name,
    description: item.description,
  }));

  return (
    <BootstrapTable
      data={normalizedRepos}
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

export default GithubTable;
