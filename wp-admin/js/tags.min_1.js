/*! This file is auto-generated */
jQuery(document).ready(function(r){var o=!1;r("#the-list").on("click",".delete-tag",function(){var t,e=r(this),n=e.parents("tr"),a=!0;return(a="undefined"!=showNotice?showNotice.warn():a)&&(t=e.attr("href").replace(/[^?]*\?/,"").replace(/action=delete/,"action=delete-tag"),r.post(ajaxurl,t,function(e){"1"==e?(r("#ajax-response").empty(),n.fadeOut("normal",function(){n.remove()}),r('select#parent option[value="'+t.match(/tag_ID=(\d+)/)[1]+'"]').remove(),r("a.tag-link-"+t.match(/tag_ID=(\d+)/)[1]).remove()):("-1"==e?r("#ajax-response").empty().append('<div class="error"><p>'+tagsl10n.noPerm+"</p></div>"):r("#ajax-response").empty().append('<div class="error"><p>'+tagsl10n.broken+"</p></div>"),n.children().css("backgroundColor",""))}),n.children().css("backgroundColor","#f33")),!1}),r("#edittag").on("click",".delete",function(e){return"undefined"==typeof showNotice||void(showNotice.warn()||e.preventDefault())}),r("#submit").click(function(){var s=r(this).parents("form");return validateForm(s)&&(o||(o=!0,s.find(".submit .spinner").addClass("is-active"),r.post(ajaxurl,r("#addtag").serialize(),function(e){var t,n,a;if(o=!1,s.find(".submit .spinner").removeClass("is-active"),r("#ajax-response").empty(),(t=wpAjax.parseAjaxResponse(e,"ajax-response"))&&!t.errors){if(0<(e=s.find("select#parent").val())&&0<r("#tag-"+e).length?r(".tags #tag-"+e).after(t.responses[0].supplemental.noparents):r(".tags").prepend(t.responses[0].supplemental.parents),r(".tags .no-items").remove(),s.find("select#parent")){for(e=t.responses[1].supplemental,n="",a=0;a<t.responses[1].position;a++)n+="&nbsp;&nbsp;&nbsp;";s.find("select#parent option:selected").after('<option value="'+e.term_id+'">'+n+e.name+"</option>")}r('input[type="text"]:visible, textarea:visible',s).val("")}}))),!1})});