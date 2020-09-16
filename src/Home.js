import React from 'react';
import './Home.css';
import CandidateForm from './components/CandidateForm';
import Header from './components/Header/Header';
import GithubTable from './components/GithubTable';
import FilterRepos from './components/FilterRepos';

const Home = () => {
  return (
    <main className='candidateContainer'>
      <header className='Header'>
        <Header />
      </header>
      <section className='CandidateForm'>
        <CandidateForm />
      </section>
      <article className='FilterRepos'>
        <FilterRepos />
      </article>
      <section className='GithubTable'>
        <GithubTable />
      </section>
    </main>
  );
};

export default Home;
