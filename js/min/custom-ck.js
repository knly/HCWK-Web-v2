$(function(){Modernizr.svg||$("img[src$='.svg']").attr("src",function(e,t){return t.replace(".svg",".png")});var e=new Date(2014,4,8,1,0,0),t=!0;new Date>e&&(t=!1),$("#countdown").countdown({timestamp:e,callback:function(){}}),$(".validate-registrierung").jqBootstrapValidation({submitSuccess:function(e,t){t.preventDefault();var a=$("input#tickets-name").val(),n=$("input#tickets-email").val(),s=$("input#tickets-code").val();$.ajax({url:"/ajax/tickets-registrieren.php",type:"GET",data:{name:a,email:n,ticketcode:s},cache:!1,success:function(e){"success"==e?($("#success").html('<div class="alert alert-success">'),$("#success > .alert-success").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-success").append('<strong>Vielen Dank! Ihr Ticket wurde registriert.</strong> Sie erhalten in wenigen Minuten eine Email zur Bestätigung. Um die angegebenen Daten zu korrigieren, können Sie die Registrierung erneut durchführen. Bitte wenden Sie sich bei Fragen an unseren <a href="/kontakt">Kontakt</a>.'),$("#success > .alert-success").append("</div>")):($("#success").html('<div class="alert alert-danger">'),$("#success > .alert-danger").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-danger").append("Invalid arguments provided"==e?'<strong>Ungültige Eingaben…</strong> Bitte füllen Sie die Felder aus oder treten Sie mit uns in <a href="/kontakt">Kontakt</a>.':"Invalid ticket code"==e?'<strong>Dieser Ticket-Code existiert nicht…</strong> Bitte senden treten Sie mit uns in <a href="/kontakt">Kontakt</a>, falls ein Fehler vorliegt.':'<strong>Der Server antwortet nicht…</strong> Bitte senden treten Sie mit uns in <a href="/kontakt">Kontakt</a>.'),$("#success > .alert-danger").append("</div>"))},error:function(e){$("#success").html('<div class="alert alert-danger">'),$("#success > .alert-danger").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-danger").append('<strong>Der Server antwortet nicht…</strong> Bitte senden treten Sie mit uns in <a href="/kontakt">Kontakt</a>.'),$("#success > .alert-danger").append("</div>")}}),$("#tickets-form").trigger("reset"),$("#registrierung-form").trigger("reset")}}),$('input[name="tickets-type"]').on("change",function(){var e=$('input[name="tickets-type"]:checked').attr("data-price");$('#paypal input[name="amount"]').val(e)}),$('input[name="tickets-zahlungsart"]').on("change",function(){var e=$('input[name="tickets-zahlungsart"]:checked').val(),t="";"paypal"==e?t="paypal.com":"sofortueberweisung"==e&&(t="sofort.com"),$("#ticketverkauf-submit-desc").addClass("show-dest").attr("data-content","Sie werden zu "+t+" weitergeleitet.")}),$(".validate-ticketverkauf").jqBootstrapValidation({submitSuccess:function(e,t){t.preventDefault();var a=$("input#tickets-name").val(),n=$("input#tickets-email").val(),s=$('input[name="tickets-zahlungsart"]:checked').val(),r=$('input[name="tickets-type"]:checked').val();return""==a||""==n||""==s||""==r?($("#success").html('<div class="alert alert-danger">'),$("#success > .alert-danger").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-danger").append('<strong>Ungültige Eingaben…</strong> Bitte füllen Sie die Felder aus oder treten Sie mit uns in <a href="/kontakt">Kontakt</a>.'),void $("#success > .alert-danger").append("</div>")):void("paypal"==s?($("form.paypal-button input[name=custom]").val(a+"&&"+n+"&&"+r),$("form.paypal-button").submit()):"sofortueberweisung"==s&&window.location.replace("/ajax/tickets-kaufen.php?name="+a+"&email="+n+"&zahlungsart="+s))}}),$("#kontakt-form .validate").jqBootstrapValidation({submitSuccess:function(e,t){t.preventDefault();var a=$("input#kontakt-name").val(),n=$("input#kontakt-email").val(),s=$("textarea#kontakt-msg").val();$.ajax({url:"/ajax/contact-form-submitting.php",type:"POST",data:{name:a,email:n,msg:s},cache:!1,success:function(e){"success"==e?($("#success").html('<div class="alert alert-success">'),$("#success > .alert-success").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-success").append("<strong>Ihre Nachricht wurde gesendet. </strong>"),$("#success > .alert-success").append("</div>"),$("#kontakt-form").trigger("reset")):($("#success").html('<div class="alert alert-danger">'),$("#success > .alert-danger").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-danger").append("Invalid arguments provided"==e?'<strong>Ungültige Eingaben…</strong> Bitte füllen Sie die Felder aus oder senden Sie stattdessen eine Email an <a href="mailto:info@hcwk.de">info@hcwk.de</a>.':'<strong>Der Server antwortet nicht…</strong> Bitte senden Sie stattdessen eine Email an <a href="mailto:info@hcwk.de">info@hcwk.de</a>.'),$("#success > .alert-danger").append("</div>"),$("#kontakt-form").trigger("reset"))},error:function(e){$("#success").html('<div class="alert alert-danger">'),$("#success > .alert-danger").html('<button class="close" type="button" data-dismiss="alert">×').append("</button>"),$("#success > .alert-danger").append('<strong>Der Server antwortet nicht…</strong> Bitte senden Sie stattdessen eine Email an <a href="mailto:info@hcwk.de">info@hcwk.de</a>.'),$("#success > .alert-danger").append("</div>"),$("#kontakt-form").trigger("reset")}})}})});