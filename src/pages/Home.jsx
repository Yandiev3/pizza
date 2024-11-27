import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {data} from '../helpers/data'
export default function Home() {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>  
      {data.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, margin: 10 }}>
          <CardMedia
            component="img"
            height="300"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{item.price}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
