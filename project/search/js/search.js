function foo(){
            var input_text = document.body.getElementsByTagName('input')[0].value;
            var country_array = document.body.getElementsByClassName('box4'); // массив всех стран
            // document.body.getElementsByTagName('h5')[0].innerHTML; захвта в строку каждой отдельной страны
            // document.body.getElementsByTagName('h5')[0].innerHTML[2]; 
            if(input_text.length == 0){
            	for (var x=0; x < country_array.length; x++){
            		country_array[x].parentNode.hidden = false; //прячу
                    document.getElementsByClassName('box4')[x].style.background = 'white';
            	}
            }
            else {
              var reg = new RegExp(input_text, 'i'); // регулярка

                for (var j=0; j < country_array.length; j++)
                {
                    // если нет совпадения по регулярке
                    if(document.getElementsByClassName('box4')[j].style.background = '#fed136'){
                        document.getElementsByClassName('box4')[j].style.background = 'white';
                    }

                    if(reg.test(country_array[j].innerHTML))
                    {
                        document.getElementsByClassName('box4')[j].style.background = '#86ff51';
                    }


                    if (!reg.test(country_array[j].innerHTML))
                    {
                        //country_array[j].parentNode.hidden = true;
                        document.getElementsByClassName('box4')[j].style.background = '#fed136';
                    }
                    

                }
            console.log(input_text);  
            }
            
        }
