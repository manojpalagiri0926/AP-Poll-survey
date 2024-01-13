from django.urls import path
from . import views

urlpatterns = [
    path("get/",views.getUserData),
    path("post/",views.postUserData),
    path('getsachivalayam/',views.getSachivalayamData),
    path('getmandals/',views.getMandalData),
    path("postmandal",views.postMandalData),
    path("getdivision/",views.getDivisionData),
    path("postdivision/",views.postDivisionData),
    path('getparty/',views.getPartyData),
    path("postparty/",views.postPartyData),
    path('getvoters/',views.getVoters),
    path('postsachivalayam/',views.postSachivalayam),
    path('deletesachivalayam/<int:pk>',views.delete_sach),
    path('deletemandal/<int:pk>/',views.deleteMandal),
    path('deletedivision/<int:pk>/',views.delete_division),
    path('getpart/',views.getParts),
    path('post_tiket/',views.post_tiket),
    path('postcreateuser/',views.createUser),
    path("addvoter/",views.addVoter),
    path("passingjsondata/",views.passingJsonData)


    
]