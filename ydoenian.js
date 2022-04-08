//jQuery.getScript('https://cdn.jsdelivr.net/gh/t-var-s/ydunian-game-mods@main/ydoenian.js')
function defineDialogueBox(options){
    if(!options){ 
        options = { continue_text: 'y doe'}; 
    }
    window.drawDialogueBox = function(){
        ctx1.globalAlpha = 0.5;
        ctx1.fillStyle = "#000";
        ctx1.fillRect(0,0,Cw,Ch);
        ctx1.globalAlpha = 1;
        w = 192*scale;
        h = 96*scale;
        ctx1.fillStyle = "#52333f";
        ctx1.fillRect((Cw/2)-(w/2),(Ch/2)-(h/2),w,h);
        ctx1.font = (11*scale)+"px MainFont"; ctx1.fillStyle = "#f5ffe8";
        ctx1.textAlign = "center";
        ctx1.fillText(diabox.title,Cw/2,(Ch/2)-(h*0.33));
        for(let i = 0; i < diabox.txt.length; i++){
            const t = diabox.txt[i];
            ctx1.fillText(t,Cw/2,(Ch/2)+((12*scale)*(i-1)));
        }
        buttonS = button1;
        ctx1.drawImage(buttonS,(Cw/2)-(32*scale),(Ch/2)+(h/2)-(16*scale),64*scale,32*scale);
        ctx1.fillText(options.continue_text,Cw/2,(Ch/2)+(h/2)+(4*scale));
        if(diabox.icon != null){
            ctx1.drawImage(diaboxicons[diabox.icon],(Cw/2)+(w/2)-16*scale,(Ch/2)-(16*scale),32*scale,32*scale);
        }
    }
}
defineDialogueBox();
