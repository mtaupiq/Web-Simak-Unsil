function date_time(id){
        date = new Date;        
		year = date.getFullYear();        
		month = date.getMonth();        
		months = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');        d = date.getDate();        
		day = date.getDay();        
		days = new Array('Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat','Sabtu');        
		h = date.getHours();        
		if(h<10){
                h = "0"+h;
		}        
		m = date.getMinutes();        
		if(m<10){
                m = "0"+m;
		}        
		s = date.getSeconds();        
		if(s<10){
                s = "0"+s;
		}
		result = ''+h+':'+m+':'+s+'. '+days[day]+', '+d+' '+months[month]+' '+year+'.';        
		document.getElementById(id).innerHTML= result;        
		setTimeout('date_time("'+id+'");','1000');        
		return true;
}
