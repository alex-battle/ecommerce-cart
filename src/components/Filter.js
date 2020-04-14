import React from 'react';

class Filter extends React.Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.count} products found.
                </div>
                <div className="col-md-4">
                    <label>
                        Order by
                        <select className="form-control" value={this.props.sort}
                            onChange={this.props.handleChangeSort}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>

                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter Size

                        <select className="form-control" value={this.props.size}
                            onChange={this.props.handleChangeSize}>
                            <option value="">All</option>
                            <option value="xs">Extra Small</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">Extra Large</option>
                            <option value="xxl">2 X</option>
                        </select>

                    </label>
                </div>
            </div>
        );
    }
}

export default Filter;