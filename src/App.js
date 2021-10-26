import './App.scss';
import api from './api/api';
import { Component } from 'react';
import { CardContent } from './Components/CardContent';
import { Typography } from './BaseComponents/Typography';
import { DataList } from './BaseComponents/DataList';
import { Wrap } from './BaseComponents/Wrap';

class App extends Component{

  state={
    articles: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    this.setState({ articles: response.data.articles});
  }

  render(){

    const { articles } = this.state;
    return(
      <Wrap className="app">

        <Typography label="Notícias sobre streammings" type="heading"/>
        <Typography label="" type="subtitle"/>

        <DataList className="articles">
          {articles.map(article => (
              <CardContent
                title={article.title}
                description={article.description}
                content={article.content}
                url={article.url}
              />
          ))}
        </DataList>

      </Wrap>
    );
  };

};

export default App;
