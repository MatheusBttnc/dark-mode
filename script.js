    $(document).ready(function() {
        $('#noite').hide()
        $('#dia').click(function() {
            $('#bolinha').animate({left: "125px"}, {duration: 300})
            $('#main').css('background-color', '#1F1B24')
            $('#corredor').css('background-color', '#274368')
            $('h1').css('color', 'white')
            $('#dia').hide()
            $('#noite').show()
        })

        $('#noite').click(function() {
            $('#bolinha').animate({left: "0px"}, {duration: 300})
            $('#main').css('background-color', 'white')
            $('#corredor').css('background-color', '#8dbeda')
            $('h1').css('color', 'black')
            $('#dia').show()
            $('#noite').hide()
        })
    })    
    
    