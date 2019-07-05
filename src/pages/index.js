import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { getWine } from '../store/wine.action'

class Index extends Component {
  componentDidMount() {
    this.props.getWineAction()
  }

  render() {
    console.log('ini dari store ', this.props.wine)
    return (<>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-3">
            ini test
          </div>
          <div className="col-sm-3">lorem lorem lorem lorem</div>
          <div className="col-sm-6">lorem lorem lorem lorem a a a a a</div>
        </div>
      </div>
    </>)
  }
}

const mapStateToProps = Store => {
  return {
    wine: Store.wineReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWineAction: () => {
      dispatch(getWine())
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Index)