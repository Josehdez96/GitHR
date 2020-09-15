import React, { useEffect, useState } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import fetchData from '../utils/fetchData';

const GithubTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('https://api.github.com/users/Josehdez96/repos')
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  }, []);

  let allProducts = products.map((item) => ({
    lenguaje: item.language,
    branch: item.default_branch,
    url: item.url,
    name: item.name,
    description: item.description,
  }));

  const options = {
    sizePerPageList: [
      {
        text: '5',
        value: 5,
      },
    ],
    sizePerPage: 5,
    prePage: 'Prev',
    nextPage: 'Next',
  };

  return (
    <BootstrapTable
      data={allProducts}
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

// response.map((item) => console.log(item.language));
// response.map((item) => console.log(item.default_branch));
// response.map((item) => console.log(item.url));
// response.map((item) => console.log(item.name));
// response.map((item) => console.log(item.description));

export default GithubTable;
