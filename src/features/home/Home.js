import React, { Component } from 'react';
import Header from '../../containers/header';
import Section from '../../containers/section';
import Input from '../../components/input';
import List from '../../components/list';
import Button from '../../components/button';
import api from '../../_config/api';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { sectionData: props.sectionData, Data: props.Data }
    this.filterList = this.filterList.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  filterList(value) {
    this.fetchData(value);
  }

  async fetchData(value) {
    const response = await api.get('/search?query=' + value)
    this.setState({ sectionData: response?.data })
  }

  async componentDidMount() {
    this.fetchData('');
  }

  handleChangeData(value) {
    this.setState({ Data: value });
  }

  render() {

    const { title } = this.props;

    const { sectionData } = this.state;

    const sectionClassInput = 'sectionInput';

    const sectionClassSearch = 'SectionSearch';

    const sectionClassList = 'SectionList';

    const InputPlaceholder = 'Enter text';

    const contentButton = "🔎";

    const { Data } = this.state;

    return (
      <div className="Home">
        <Header title={title}></Header>
        <Section className={sectionClassInput}> <Input inputPlaceholder={InputPlaceholder} callback={this.handleChangeData} /></Section>
        <Section className={sectionClassSearch}> < Button content={contentButton} valueSearch={Data} callback={this.filterList} /></Section>
        <Section className={sectionClassList}> <List data={sectionData} /> </Section>
      </div >
    )
  }

}
export default Home;