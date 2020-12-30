import React from 'react';

class PriceFilter extends React.Component {
    render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.updatePriceLow(event.target.value)}
            placeholder={this.props.priceLow}
          />
          <input
            type="text"
            onChange={event => this.props.updatePriceHigh(event.target.value)}
            placeholder={this.props.priceHigh}
          />
        </form>
      </div>
    )
  }
}

export default PriceFilter; 