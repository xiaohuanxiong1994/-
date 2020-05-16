$(document).ready(function(){
	alert(
		"说明：\n"+
		"1、默认主精灵是3圣兽+2无极\n"+
		"2、默认主精灵的3个圣兽的主属性不相同（主要是因为如果圣兽石相同会有bug，懒得改，再说实际情况也不会有相同圣兽吧）\n"+
		"3、副精灵直接选属性就好了\n"+
		"4、自定义主精灵和月辉石啥的还在开发中，先将就着玩吧\n"+
		"作者：清风明月-四叶游戏"
	);

	//精灵总属性
	var power=0;			//力量1
	var endurance=0;		//耐力2
	var physical=0;			//体质3
	var agile=0;			//敏捷4
	var magic=0;			//魔力5

	//属性数组
	var attrArr=["占个位置","力量","耐力","体质","敏捷","魔力"]

	//各个石头，数组第一个数字，0表示圣兽，1表示无极，第7个表示主，第8个表示副
	var ss1=[0,0,0,0,0,0,0,0]; //6号圣兽石
	var ss2=[0,0,0,0,0,0,0,0]; //7号圣兽石
	var ss3=[0,0,0,0,0,0,0,0]; //8号圣兽石
	var wj4=[1,0,0,0,0,0]; //9号石头
	var wj5=[1,0,0,0,0,0]; //10号石头

	//附加属性
	var fj1=0;	//圣兽石直接是附加等级，最多是4
	var fj2=0;
	var fj3=0;
	var fj4=[1,0,0,0,0,0];
	var fj5=[1,0,0,0,0,0];

	//刷新精灵属性
	function fresh(){
		power=ss1[1]+ss2[1]+ss3[1]+wj4[1]+wj5[1]+fj4[1]+fj5[1];
		endurance=ss1[2]+ss2[2]+ss3[2]+wj4[2]+wj5[2]+fj4[2]+fj5[2];
		physical=ss1[3]+ss2[3]+ss3[3]+wj4[3]+wj5[3]+fj4[3]+fj5[3];
		agile=ss1[4]+ss2[4]+ss3[4]+wj4[4]+wj5[4]+fj4[4]+fj5[4];
		magic=ss1[5]+ss2[5]+ss3[5]+wj4[5]+wj5[5]+fj4[5]+fj5[5];
		//添加圣兽石附加
		switch(ss1[6]){
			case 1:
				power+=fj1;
				break;
			case 2:
				endurance+=fj1;
				break;
			case 3:
				physical+=fj1;
				break;
			case 4:
				agile+=fj1;
				break;
			case 5:
				magic+=fj1;
				break;
			default:
				console.log("ss1 error");
		}
		switch(ss2[6]){
			case 1:
				power+=fj2;
				break;
			case 2:
				endurance+=fj2;
				break;
			case 3:
				physical+=fj2;
				break;
			case 4:
				agile+=fj2;
				break;
			case 5:
				magic+=fj2;
				break;
			default:
				console.log("ss2 error");
		}
		switch(ss3[6]){
			case 1:
				power+=fj3;
				break;
			case 2:
				endurance+=fj3;
				break;
			case 3:
				physical+=fj3;
				break;
			case 4:
				agile+=fj3;
				break;
			case 5:
				magic+=fj3;
				break;
			default:
				console.log("ss3 error");
		}
		$("#att1").text(power);
		$("#att2").text(endurance);
		$("#att3").text(physical);
		$("#att4").text(agile);
		$("#att5").text(magic);

		console.log("总属性:"+power+"_"+endurance+"_"+physical+"_"+agile+"_"+magic);
		//判断技能
		judge(power,endurance,physical,agile,magic);
	}

	//判断是否满足属性要求
	function judge(a,b,c,d,e){
		if(a>=14&&b>=11&&c>=9&&d>=9&&e>=11){
			//精灵之悟
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").show();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else if(a>=11&&b>=11&&c>=11&&d>=11&&e>=11){
			//精灵之怒
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").hide();
			$("#sjn2").show();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else if(a>=9&&b>=14&&c>=9&&d>=10&&e>=12){
			//精灵之摄
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").show();
		}else if(a>=9&&b>=11&&c>=14&&d>=9&&e>=11){
			//精灵之舞
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").show();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else if(a>=9&&b>=11&&c>=10&&d>=9&&e>=15){
			//精灵之盾
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").show();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else if(a>=9&&b>=11&&c>=9&&d>=14&&e>=11){
			//精灵之歌
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").show();
			$("#sjn6").hide();
		}else if(a>=8&&b>=11&&c>=8&&d>=8&&e>=11){
			//三技能
			$("#df").show();
			$("#qf").show();
			$("#sjn").show();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else if(a>=7&&b>=7&&c>=7&&d>=7&&e>=7){
			//群法
			$("#df").show();
			$("#qf").show();
			$("#sjn").hide();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else if(a>=5&&b>=5&&c>=5&&d>=5&&e>=5){
			//单法
			$("#df").show();
			$("#qf").hide();
			$("#sjn").hide();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}else{
			//没技能
			$("#df").hide();
			$("#qf").hide();
			$("#sjn").hide();
			$("#sjn1").hide();
			$("#sjn2").hide();
			$("#sjn3").hide();
			$("#sjn4").hide();
			$("#sjn5").hide();
			$("#sjn6").hide();
		}
	}

	//重置圣兽
	function SSattrRandom(ssnum){
		//确认主属性
		var a=Math.ceil(Math.random()*5);
		//要求主属性和另外哪个圣兽石的主属性不一样
		var a1=0;
		var a2=0;
		if(ssnum==1){
			a1=ss2[6];
			a2=ss3[6];
		}else if(ssnum==2){
			a1=ss1[6];
			a2=ss3[6];
		}else if(ssnum==3){
			a1=ss1[6];
			a2=ss2[6];
		}
		while(a==a1||a==a2){
			a=Math.ceil(Math.random()*5);
		}

		//确认副属性
		var b=Math.ceil(Math.random()*5);
		while(b==a){
			b=Math.ceil(Math.random()*5);
		}

		//给圣兽石添加属性
		SSaddAttr(ssnum,a,b);
	}

	//给圣兽石添加属性
	function SSaddAttr(ssnum,a,b){
		switch(ssnum)
		{
			case 1:
				ss1=[0,0,0,0,0,0,0,0];
				ss1[a]=4;
				ss1[b]=1;
				ss1[6]=a;
				ss1[7]=b;
				break;
			case 2:
				ss2=[0,0,0,0,0,0,0,0];
				ss2[a]=4;
				ss2[b]=1;
				ss2[6]=a;
				ss2[7]=b;
				break;
			case 3:
				ss3=[0,0,0,0,0,0,0,0];
				ss3[a]=4;
				ss3[b]=1;
				ss3[6]=a;
				ss3[7]=b;
				break;
			default:
				console.log("SSaddAttr有点问题呀");
		}
	}

	//重置无极石
	function WJattrRandom(wjnum){
		var a=Math.floor(Math.random()*9); //力量
		var b=Math.floor(Math.random()*9); //耐力
		var c=Math.floor(Math.random()*9); //体力
		var d=Math.floor(Math.random()*9); //敏捷
		var e=Math.floor(Math.random()*9); //魔力
		var f=a+b+c+d+e;
		while(f!=10){
			a=Math.floor(Math.random()*9); //力量
			b=Math.floor(Math.random()*9); //耐力
			c=Math.floor(Math.random()*9); //体力
			d=Math.floor(Math.random()*9); //敏捷
			e=Math.floor(Math.random()*9); //魔力
			f=a+b+c+d+e;
		}
		WJaddAttr(wjnum,a,b,c,d,e);
	}

	//给无极添加属性
	function WJaddAttr(wjnum,a,b,c,d,e){
		switch(wjnum)
		{
			case 4:
				wj4[1]=a;
				wj4[2]=b;
				wj4[3]=c;
				wj4[4]=d;
				wj4[5]=e;
				break;
			case 5:
				wj5[1]=a;
				wj5[2]=b;
				wj5[3]=c;
				wj5[4]=d;
				wj5[5]=e;
				break;
			default:
				console.log("WJaddAttr有点问题呀");
		}
	}

	$("#resetone").click(function(){
		SSattrRandom(1);

		//重置6号圣兽石界面
		var nodeS1=$(".content .stone").eq(0).find("li");
		nodeS1.eq(1).find("span").text(attrArr[ss1[6]]);
		nodeS1.eq(2).find("span").text(attrArr[ss1[7]]);

		//清空附加
		fj1=0;
		var nodeS=$(".content .stone").eq(0).find("li");
		nodeS.eq(3).find("span").text(fj1);

		//刷新精灵
		fresh();
	})

	$("#resettwo").click(function(){
		SSattrRandom(2);

		//重置7号圣兽石界面
		var nodeS2=$(".content .stone").eq(1).find("li");
		nodeS2.eq(1).find("span").text(attrArr[ss2[6]]);
		nodeS2.eq(2).find("span").text(attrArr[ss2[7]]);

		//清空附加
		fj2=0;
		var nodeS=$(".content .stone").eq(1).find("li");
		nodeS.eq(3).find("span").text(fj2);

		//刷新精灵
		fresh();
	})

	$("#resetthree").click(function(){
		SSattrRandom(3);

		//重置8号圣兽石界面
		var nodeS3=$(".content .stone").eq(2).find("li");
		nodeS3.eq(1).find("span").text(attrArr[ss3[6]]);
		nodeS3.eq(2).find("span").text(attrArr[ss3[7]]);

		//清空附加
		fj3=0;
		var nodeS=$(".content .stone").eq(2).find("li");
		nodeS.eq(3).find("span").text(fj3);

		//刷新精灵
		fresh();
	})

	$("#resetfour").click(function(){
		WJattrRandom(4);
		//清空附加
		fj4=[1,0,0,0,0,0];

		//重置9号无极石界面
		var nodeW4=$(".content .stone").eq(3).find("li");
		nodeW4.eq(1).find("span").eq(0).text(wj4[1]);
		nodeW4.eq(2).find("span").eq(0).text(wj4[2]);
		nodeW4.eq(3).find("span").eq(0).text(wj4[3]);
		nodeW4.eq(4).find("span").eq(0).text(wj4[4]);
		nodeW4.eq(5).find("span").eq(0).text(wj4[5]);

		//清空附加
		fj4=[1,0,0,0,0,0];
		var nodeW=$(".content .stone").eq(3).find("li");
		nodeW.eq(1).find("span").eq(1).text(fj4[1]);
		nodeW.eq(2).find("span").eq(1).text(fj4[2]);
		nodeW.eq(3).find("span").eq(1).text(fj4[3]);
		nodeW.eq(4).find("span").eq(1).text(fj4[4]);
		nodeW.eq(5).find("span").eq(1).text(fj4[5]);

		//刷新精灵
		fresh();
	})

	$("#resetfive").click(function(){
		WJattrRandom(5);

		//重置10号无极石界面
		var nodeW5=$(".content .stone").eq(4).find("li");
		nodeW5.eq(1).find("span").eq(0).text(wj5[1]);
		nodeW5.eq(2).find("span").eq(0).text(wj5[2]);
		nodeW5.eq(3).find("span").eq(0).text(wj5[3]);
		nodeW5.eq(4).find("span").eq(0).text(wj5[4]);
		nodeW5.eq(5).find("span").eq(0).text(wj5[5]);

		//清空附加
		fj5=[1,0,0,0,0,0];
		var nodeW=$(".content .stone").eq(4).find("li");
		nodeW.eq(1).find("span").eq(1).text(fj5[1]);
		nodeW.eq(2).find("span").eq(1).text(fj5[2]);
		nodeW.eq(3).find("span").eq(1).text(fj5[3]);
		nodeW.eq(4).find("span").eq(1).text(fj5[4]);
		nodeW.eq(5).find("span").eq(1).text(fj5[5]);

		//刷新精灵
		fresh();
	})

	//副精灵9号10号石头
	$("#stone4 select").eq(0).change(function(){
		var stone9select=$(this).val();
		if(stone9select==100){
			$("#stone4 select").eq(1).show();
		}else{
			$("#stone4 select").eq(1).hide();
		}
	});

	$("#stone5 select").eq(0).change(function(){
		var stone10select=$(this).val();
		if(stone10select==100){
			$("#stone5 select").eq(1).show();
		}else{
			$("#stone5 select").eq(1).hide();
		}
	});

	//合成
	$("#ronghe").click(function(){
		//检查副精灵的无极石有几个
		var fwj9=$("#stone4 select").eq(0).val();
		var fwj10=$("#stone5 select").eq(0).val();
		var sumwj=0; //这个就是无极石的个数
		if(fwj9==10){
			sumwj++;
		};
		if(fwj10==10){
			sumwj++;
		};
		//设置无极加成
		setFjlwj(sumwj);
		//设置圣兽加成
		setFjlss();
		//刷新精灵
		fresh();
	})

	function setFjlwj(num){
		var a=0;
		var b=0;
		var c=0;
		var sum=fj4[1]+fj4[2]+fj4[3]+fj4[4]+fj4[5];
		var sumwarn=fj5[1]+fj5[2]+fj5[3]+fj5[4]+fj5[5];
		if(num!=0){
			if(sumwarn<5||sum<5){
				if(num==1){
					a=Math.ceil(Math.random()*5);
					if(sum<5){
						fj4[a]+=1;
					}else{
						if(sumwarn<5){
							fj5[a]+=1;
						}
					}
				}else if(num==2){
					b=Math.ceil(Math.random()*5);
					c=Math.ceil(Math.random()*5);
					if(sum<4){
						if(b==c){
							fj4[b]+=2;
						}else{
							fj4[b]+=1;
							fj4[c]+=1;
						}
					}else if(sum==4){
						if(b==c){
							fj4[b]+=1;
							if(sumwarn<5){
								fj5[b]+=1;
							}
						}else{
							fj4[b]+=1;
							if(sumwarn<5){
								fj5[c]+=1;
							}
						}
					}else{
						if(sumwarn<4){
							if(b==c){
								fj5[b]+=2;
							}else{
								fj5[b]+=1;
								fj5[c]+=1;
							}	
						}else{
							fj5[b]+=1;
						}
					}
				}else{
					console.log("副无极石数量有问题");
				}	
			}else{
				console.log("合满了无极石不能再加了");
			}
		}
		//根据fj4、fj5显示
		var nodeW4=$(".content .stone").eq(3).find("li");
		var nodeW5=$(".content .stone").eq(4).find("li");
		nodeW4.eq(1).find("span").eq(1).text(fj4[1]);
		nodeW4.eq(2).find("span").eq(1).text(fj4[2]);
		nodeW4.eq(3).find("span").eq(1).text(fj4[3]);
		nodeW4.eq(4).find("span").eq(1).text(fj4[4]);
		nodeW4.eq(5).find("span").eq(1).text(fj4[5]);
		nodeW5.eq(1).find("span").eq(1).text(fj5[1]);
		nodeW5.eq(2).find("span").eq(1).text(fj5[2]);
		nodeW5.eq(3).find("span").eq(1).text(fj5[3]);
		nodeW5.eq(4).find("span").eq(1).text(fj5[4]);
		nodeW5.eq(5).find("span").eq(1).text(fj5[5]);
	}

	function setFjlss(){
		//附加数组,第一个数字是占位的,不是圣兽就会加到这里去
		var fjsz=[0,0,0,0,0,0];
		var fjss1=$("#stone1 select").val();
		var fjss2=$("#stone2 select").val();
		var fjss3=$("#stone3 select").val();
		var fjss4=0;
		var fjss5=0;
		if($("#stone4 select").eq(0).val()==100){
			fjss4=$("#stone4 select").eq(1).val();
		}
		if($("#stone5 select").eq(0).val()==100){
			fjss5=$("#stone5 select").eq(1).val();
		}
		//设置附加数组
		fjsz[fjss1]+=1;
		fjsz[fjss2]+=1;
		fjsz[fjss3]+=1;
		fjsz[fjss4]+=1;
		fjsz[fjss5]+=1;
		//设置圣兽附加的全局变量
		fj1+=fjsz[ss1[6]];
		fj2+=fjsz[ss2[6]];
		fj3+=fjsz[ss3[6]];
		//规则判断
		if(fj1>4){
			fj1=4;
		}
		if(fj2>4){
			fj2=4;
		}
		if(fj3>4){
			fj3=4;
		}
		//显示
		var nodeS1=$(".content .stone").eq(0).find("li");
		var nodeS2=$(".content .stone").eq(1).find("li");
		var nodeS3=$(".content .stone").eq(2).find("li");
		nodeS1.eq(3).find("span").text(fj1);
		nodeS2.eq(3).find("span").text(fj2);
		nodeS3.eq(3).find("span").text(fj3);
	}

	//重置所有
	$("#res").click(function(){
		//直接刷新页面算了，没必要搞那么复杂
		location.reload(true);
	})
})