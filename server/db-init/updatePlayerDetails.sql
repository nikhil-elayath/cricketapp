UPDATE player
   SET batting_style=dummy.batting_style, 
       bowling_style=dummy.bowling_style, player_dob=dummy.player_dob, player_role=dummy.player_role, debut_odi_match=dummy.debut_odi_match, 
       debut_test_match=dummy.debut_test_match, debut_t20_match=dummy.debut_t20_match, player_country=dummy.player_country
   FROM dummy
 WHERE player.player_name = dummy.player_name;
