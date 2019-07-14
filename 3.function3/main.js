function alphabetSort(message) {
            var arr = message.split('');
            arr = arr.sort();
            console.log(arr);
            message = arr.join('');
            console.log(message);
        }
alphabetSort('hello');
