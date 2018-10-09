import React, { Component } from 'react';
import { Input, Button, Card, Icon } from 'react-materialize';
class CommentWal extends Component {
    constructor() {
      super();
      this.state = {
        inputVal: '',
        act: 0,
        index: '',
        wall: []
      }
      this.btnPublic = this.btnPublic.bind(this)
    }
  
    btnPublic(e) {
      e.preventDefault()
  
      let wall = this.state.wall;
      let publishWall = this.state.inputVal;
      console.log(publishWall)
  
  
      let dataPublish = {
        publishWall: publishWall
      }
  
      this.setState({
        ...this.state, //copiar el estado ... al nuevo objeto
        wall: this.state.wall.concat(dataPublish)
      });
    }
  
    onChange(name, event) {
      this.setState({
        ...this.state,
        [name]: event.target.value
      });
    }
  
    Delete(i) {
      console.log('hey')
      let wall = this.state.wall;
      wall.splice(i, 1);
      this.setState({
        wall: wall
      })
    }
  
    render() {
      let wall = this.state.wall;
      return (
        <div>
          <div className='wallUser'>
            <Card className='CardRegister' textClassName='black-text'>

              <form>
                <Input s={10} placeholder="Coloca tu comentario aqui <3!!" onChange={e => this.onChange("inputVal", e)} type="text" />
                <div className='center-align'>
                  <Button onClick={this.btnPublic}>Publicar</Button>
                </div>
              </form>
            </Card>
            <pre>
              {wall.map((walls, i) =>
                <Card className='cardWall' key={i} textClassName='black-text'>
                  <h6>{walls.publishWall}</h6>
                  <div>
                  
                  </div>
                  <div className="iconDelete">
                    <a onClick={() => this.Delete(i)}><Icon>delete</Icon></a>
                  </div>
                </Card>
              )}
            </pre>
          </div>
        </div>
      )
    }
  }
  export default CommentWal;