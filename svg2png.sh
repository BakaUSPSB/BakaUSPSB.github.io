#!/bin/bash



for file in `find . -type f -name *.ts`
do
	rm $file
done

