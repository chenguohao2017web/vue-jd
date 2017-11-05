
// function test()
// {
// 	console.log("test")
// }

function getStyle(obj,name)
{
	return getComputedStyle(obj,null)[name]
}

function startMove(obj,json,callback)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){

		for ( var attr in json )
		{
			var current = 0 
			current = parseInt( getStyle( obj,attr ) )


			var speed = ( json[attr] - current ) / 10
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

			if(json[attr] == current )
			{
				clearInterval(obj.timer)

				if(callback)
				{
					callback()
				}
			}
			else
			{
				obj.style[attr] = current + speed +'px'
			}
		}
	},30)
}