# My Caesar CLI
To run the application
```sh
$ git clone *this repository*
```
Then change directory 
```sh
$ cd ceasar
```
Then install the required dependencies
```sh
$ npm install
```
## How to use this CLI?
Try to use command in console with option
```sh
$ node my_caesar_cli *option*
```
### Option:
```sh
$ -s or --shift *number*  // required option
$ -a or --action *encode/decode* //required option
$ -o or --output *path to created file*
$ -i or --input *path to created file*
```
### Example of command:
```sh
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
```sh
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
```sh
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
```
### Result of usage:
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

### Exit
To exit the application, press CTRL+C  in the console.
