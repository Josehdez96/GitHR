import React from 'react';
import './Home.css';
import CandidateForm from './components/Form';
import Header from './components/Header';
import GithubTable from './components/GithubTable';

const Home = () => {
  return (
    <main className='candidateContainer'>
      <header className='header'>
        <Header />
      </header>
      <section className='CandidateForm'>
        <CandidateForm />
      </section>
      <section className='GithubTable'>
        <GithubTable />
      </section>
    </main>
  );
};

export default Home;
