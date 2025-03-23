'use client'

import classes from './page.module.css'
// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'

const OPTIONS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

export default function Home() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <main className={classes.root}>
      {/*<Card className={classes.card}>*/}
      {/*  <CardHeader>*/}
      {/*    <CardTitle>Page Editor</CardTitle>*/}
      {/*  </CardHeader>*/}
      {/*  <CardContent>*/}
      {/*    <div className={classes.list}>*/}
      {/*      {OPTIONS.map((item) => (*/}
      {/*        <Button variant="secondary" key={item} onClick={handleClick}>*/}
      {/*          {item}*/}
      {/*        </Button>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </CardContent>*/}
      {/*  <CardFooter className={classes.footer}>*/}
      {/*    <Button>Click me</Button>*/}
      {/*  </CardFooter>*/}
      {/*</Card>*/}
      <div className={classes.preview}>Preview</div>
    </main>
  )
}
