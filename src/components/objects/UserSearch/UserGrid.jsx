import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 453,
    maxWidth: 700,
    minWidth: 300,
    backgroundColor: 'gray',
    borderRadius: 4
  },
}));

function renderRow(props) {
  const { index, style, data } = props;
  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`${data[index].name} - ${data[index].id}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};


export default function VirtualizedList({repos}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={453.172} width={340.172} itemSize={50} itemCount={repos.length} itemData={repos}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
