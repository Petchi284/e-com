const buttons = document.querySelectorAll('.btn');
    const boxes = document.querySelectorAll('.box');
    const searchline= document.querySelector("#search");


    searchline.addEventListener('keyup',(e)=>{
        text=e.target.value.toLowerCase().trim();
        
        /*search box uses*/
        boxes.forEach((bx)=>{
            const data= bx.dataset.product;
            if(data.includes(text)){
                bx.style.display='block';
            }else{
                bx.style.display='none';
            }});
        });
        
        /*button click*/
        
        buttons.forEach((butt)=>{
            butt.addEventListener('click',(evnt)=>{
                evnt.preventDefault();
                const filter=evnt.target.dataset.filter;
                
                /*select box images*/
                boxes.forEach((box=>{
                    if(filter=='all'){
                        box.style.display='block';
                    }else{
                        const boxfilter=box.dataset.product;
                        if(filter==boxfilter){
                            box.style.display='block';
                        }else{
                            box.style.display='none';
                        }
                     }
                    }));
                });
            });

