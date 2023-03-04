import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import GitlabIcon from 'src/assets/icons/GitlabIcon';

const data = [
  {
    id: uuid(),
    name: 'VS Code',
    imageUrl: `${process.env.PUBLIC_URL}/static/images/plugins/vscode.png`,
    repository: 'https://github.com/cas-agile/logger-vscode',
    repositoryIcon: [<GitHubIcon key={uuid()}/>]
  },
  {
    id: uuid(),
    name: 'IntelliJ Idea',
    imageUrl: `${process.env.PUBLIC_URL}/static/images/plugins/idea.png`,
    repository: 'https://github.com/cas-agile/logger-intellij',
    repositoryIcon: [<GitHubIcon key={uuid()}/>]
  }
];

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

function Plugins(props){
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card >
      <CardHeader
        title="Available Logger Plugins"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem
            divider={i < products.length - 1}
            key={product.id}
          >
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
            />
            <Tooltip title='Go to repository'>
              <IconButton
                edge="end"
                size="small"
                onClick={() => window.location = product.repository}
              >
                {product.repositoryIcon}
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Card>
  );
}

export default Plugins;
