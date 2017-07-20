import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RawHtml from 'react-raw-html';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Box from './Box';

const mapStateToProps = state => {
  return {
    intro: state.intro
  };
};

const Main = ({ intro }) => (
  <Grid fluid>
    <Row>

      <Col md={6}>
        <Box styleName='intro'>
          <RawHtml.div>{intro}</RawHtml.div>
        </Box>
      </Col>

      <Col md={6}>
        <Box styleName='intro'>
          <RawHtml.div>{intro}</RawHtml.div>
        </Box>
      </Col>
    </Row>
  </Grid>
);

Main.propTypes = {
  intro: PropTypes.string
};

export default connect(
  mapStateToProps
)(Main);
