import React, {Component} from "react"


class MemeGenerator extends Component {
    //able to create class variables without a constructor
    state = {
            topText:"",
            botText:"",
            randomImage:"",
            allMemeImgs: []
        }


    //changing this handle methods to arrow functions
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes,
                    randomImg: memes[0].url
                })
            })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                        type="text"
                        name="botText"
                        value={this.state.botText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="meme" style={{textAlign:"center"}}/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.botText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator